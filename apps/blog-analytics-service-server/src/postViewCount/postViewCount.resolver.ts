import * as graphql from "@nestjs/graphql";
import { PostViewCountResolverBase } from "./base/postViewCount.resolver.base";
import { PostViewCount } from "./base/PostViewCount";
import { PostViewCountService } from "./postViewCount.service";

@graphql.Resolver(() => PostViewCount)
export class PostViewCountResolver extends PostViewCountResolverBase {
  constructor(protected readonly service: PostViewCountService) {
    super(service);
  }
}
