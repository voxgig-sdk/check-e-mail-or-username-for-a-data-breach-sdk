<?php
declare(strict_types=1);

// CheckEMailOrUsernameForADataBreach SDK utility: feature_hook

class CheckEMailOrUsernameForADataBreachFeatureHook
{
    public static function call(CheckEMailOrUsernameForADataBreachContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
