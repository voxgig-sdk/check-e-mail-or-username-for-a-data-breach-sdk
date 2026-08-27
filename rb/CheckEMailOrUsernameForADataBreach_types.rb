# frozen_string_literal: true

# Typed models for the CheckEMailOrUsernameForADataBreach SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# DataBreachCheck entity data model.
#
# @!attribute [rw] date
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
DataBreachCheck = Struct.new(
  :date,
  :name,
  keyword_init: true
)

# Request payload for DataBreachCheck#list.
#
# @!attribute [rw] check
#   @return [String]
DataBreachCheckListMatch = Struct.new(
  :check,
  keyword_init: true
)

