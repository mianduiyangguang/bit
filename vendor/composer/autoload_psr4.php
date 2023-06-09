<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'think\\worker\\' => array($vendorDir . '/topthink/think-worker/src'),
    'think\\composer\\' => array($vendorDir . '/topthink/think-installer/src'),
    'think\\captcha\\' => array($vendorDir . '/topthink/think-captcha/src'),
    'think\\' => array($vendorDir . '/topthink/think-queue/src', $vendorDir . '/topthink/think-helper/src'),
    'myxland\\addons\\' => array($vendorDir . '/myxland/think-addons/src'),
    'app\\' => array($baseDir . '/application'),
    'Workerman\\' => array($vendorDir . '/workerman/workerman'),
    'Wechat\\' => array($vendorDir . '/zoujingli/wechat-php-sdk/Wechat'),
    'GatewayWorker\\' => array($vendorDir . '/workerman/gateway-worker/src'),
    'Apfelbox\\FileDownload\\' => array($vendorDir . '/apfelbox/php-file-download/src'),
);
