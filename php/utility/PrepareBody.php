<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: prepare_body

class CheckEMailOrUsernameForADataBreachPrepareBody
{
    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
