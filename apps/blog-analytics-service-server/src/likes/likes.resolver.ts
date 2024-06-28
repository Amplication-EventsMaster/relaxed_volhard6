import * as graphql from "@nestjs/graphql";
import { LikesResolverBase } from "./base/likes.resolver.base";
import { Likes } from "./base/Likes";
import { LikesService } from "./likes.service";

@graphql.Resolver(() => Likes)
export class LikesResolver extends LikesResolverBase {
  constructor(protected readonly service: LikesService) {
    super(service);
  }
}
