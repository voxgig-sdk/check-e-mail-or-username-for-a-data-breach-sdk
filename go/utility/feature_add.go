package utility

import "github.com/voxgig-sdk/check-e-mail-or-username-for-a-data-breach-sdk/core"

func featureAddUtil(ctx *core.Context, f core.Feature) {
	client := ctx.Client
	features := client.Features

	client.Features = append(features, f)
}
