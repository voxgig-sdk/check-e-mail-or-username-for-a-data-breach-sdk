<?php
declare(strict_types=1);

// Typed models for the CheckEMailOrUsernameForADataBreach SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** DataBreachCheck entity data model. */
class DataBreachCheck
{
    public string $date;
    public string $name;
}

/** Request payload for DataBreachCheck#list. */
class DataBreachCheckListMatch
{
    public ?string $date = null;
    public ?string $name = null;
}

