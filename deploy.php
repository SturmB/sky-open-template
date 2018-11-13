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
set('extension_dir', '/Library/Application\ Support/Adobe/CEP/extensions');

// Development location
set('dev_dir', '~/Development');

// License file location
set('license_file', '{{application}}.p12');
set('license', '{{dev_dir}}/{{license_file}}');

// License password
set('license_pwd', 'ncc1701');

// Packager location
set('packager_file', 'ZXPSignCmd');
set('packager', '{{dev_dir}}/{{packager_file}}');

// Timestamp URL
set('timestamp_url', 'http://timestamp.comodoca.com/rfc3161');


// Hosts
localhost()
    ->set('deploy_path', '{{dev_dir}}/{{application}}');


// Tasks
desc('Remove debugging file.');
task('undebug', function () {
    run('rm -f {{release_path}}/.debug');
});

desc('Remove locker.');
task('locker:remove', function () {
    run('rm -rf {{release_path}}/locker');
});

desc('Remove unnecessary files.');
task('remover', [
    'undebug',
    'locker:remove'
]);

desc('Run the packager.');
task('package', function () {
    cd('{{deploy_path}}');
    run('{{packager}} -sign current {{application}}.zxp {{license}} {{license_pwd}} -tsa {{timestamp_url}}');
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
    'deploy:symlink',
    'remover',
    'deploy:unlock',
    'cleanup',
    'package',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
