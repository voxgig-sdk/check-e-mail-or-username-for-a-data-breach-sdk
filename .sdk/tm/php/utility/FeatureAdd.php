<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: feature_add

class CheckEMailOrUsernameForADataBreachFeatureAdd
{
    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
