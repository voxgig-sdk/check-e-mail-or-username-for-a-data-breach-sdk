<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CheckEMailOrUsernameForADataBreachFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CheckEMailOrUsernameForADataBreachBaseFeature();
            case "test":
                return new CheckEMailOrUsernameForADataBreachTestFeature();
            default:
                return new CheckEMailOrUsernameForADataBreachBaseFeature();
        }
    }
}
