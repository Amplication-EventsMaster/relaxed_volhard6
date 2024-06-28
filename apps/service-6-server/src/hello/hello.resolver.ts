import * as graphql from "@nestjs/graphql";
import { HelloResolverBase } from "./base/hello.resolver.base";
import { Hello } from "./base/Hello";
import { HelloService } from "./hello.service";

@graphql.Resolver(() => Hello)
export class HelloResolver extends HelloResolverBase {
  constructor(protected readonly service: HelloService) {
    super(service);
  }
}
