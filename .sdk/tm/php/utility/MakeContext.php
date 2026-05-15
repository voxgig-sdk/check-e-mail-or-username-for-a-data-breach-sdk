<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CheckEMailOrUsernameForADataBreachMakeContext
{
    public static function call(array $ctxmap, ?CheckEMailOrUsernameForADataBreachContext $basectx): CheckEMailOrUsernameForADataBreachContext
    {
        return new CheckEMailOrUsernameForADataBreachContext($ctxmap, $basectx);
    }
}
