<?php
namespace Deployer;

/** @noinspection PhpIncludeInspection */
require 'recipe/common.php';

// Project name
set('application', 'sky-open-template');

// Project repository
set('repository', 'https://github.com/SturmB/sky-open-template.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);

// Extension location
set('extension_dir', ' /mnt/c/Users/christopher.mcgee/AppData/Roaming/Adobe/CEP/extensions');
set('extension_dir_win', ' C:\Users\christopher.mcgee\AppData\Roaming\Adobe\CEP\extensions');

// Development location
set('dev_dir', '~/winhome/dev/Projects');
set('dev_dir_link', '/Users/christopher.mcgee/dev/Projects');
set('dev_dir_win', 'C:\Users\christopher.mcgee\dev\Projects');

// License file location
set('license_file', '{{application}}.p12');
set('license', '{{dev_dir}}/{{license_file}}');
set('license_win', 'C:\Users\christopher.mcgee\dev\Projects\{{license_file}}');

// License password
set('license_pwd', 'ncc1701');

// Packager location
set('packager_file', 'ZXPSignCmd.exe');
set('packager', '{{dev_dir_win}}\{{packager_file}}');

// Timestamp URL
set('timestamp_url', 'http://timestamp.comodoca.com/rfc3161');


// Hosts
localhost()
->set('deploy_path', '{{dev_dir}}/{{application}}');

set('deploy_path_link', '{{dev_dir_link}}/{{application}}');


// Tasks
desc('Creating symlink to release');
task('deploy:symlinknew', function () {
    // Requires `mklink.sh` fix for WSL:
    // https://akudo.codes/2018/12/10/mklink-command-in-windows-ubuntu-wsl/
    run("cd {{deploy_path}} && mklink.sh current {{deploy_path_link}}/releases/{{release_name}}"); // Create symlink/junction.
    run("cd {{deploy_path}} && rm release"); // Remove release link.
});

desc('Remove debugging file.');
task('undebug', function () {
    // Remove the debugging file, if it exists.
    if (test('[ -f {{release_path}}/.debug ]')) {
        run('rm -f {{release_path}}/.debug');
    }
});

desc('Remove locker.');
task('locker:remove', function () {
    // Remove the locker folder, if it exists.
    if (test('[ -d {{release_path}}/locker ]')) {
        run('rm -rf {{release_path}}/locker');
    }
});

desc('Remove unnecessary files.');
task('remover', [
    'undebug',
    'locker:remove'
]);

desc('Run the packager.');
task('package', function () {
    cd('{{dev_dir}}');
    // Remove the existing package, if it exists.
    if (test('[ -f {{application}}.zxp ]')) {
        run('rm -f {{application}}.zxp');
    }
    run('/mnt/c/Windows/System32/cmd.exe /C "{{packager}} -sign {{application}}\current {{application}}.zxp {{license_win}} {{license_pwd}} -tsa {{timestamp_url}}"');
});


desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:clear_paths',
    'deploy:symlinknew',
    'remover',
    'deploy:unlock',
    'cleanup',
    'package',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
