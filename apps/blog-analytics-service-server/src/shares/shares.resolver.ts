import * as graphql from "@nestjs/graphql";
import { SharesResolverBase } from "./base/shares.resolver.base";
import { Shares } from "./base/Shares";
import { SharesService } from "./shares.service";

@graphql.Resolver(() => Shares)
export class SharesResolver extends SharesResolverBase {
  constructor(protected readonly service: SharesService) {
    super(service);
  }
}
