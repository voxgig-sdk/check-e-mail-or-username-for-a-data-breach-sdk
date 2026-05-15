<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: prepare_method

class CheckEMailOrUsernameForADataBreachPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
