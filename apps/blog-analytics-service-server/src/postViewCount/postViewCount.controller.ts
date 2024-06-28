import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostViewCountService } from "./postViewCount.service";
import { PostViewCountControllerBase } from "./base/postViewCount.controller.base";

@swagger.ApiTags("postViewCounts")
@common.Controller("postViewCounts")
export class PostViewCountController extends PostViewCountControllerBase {
  constructor(protected readonly service: PostViewCountService) {
    super(service);
  }
}
