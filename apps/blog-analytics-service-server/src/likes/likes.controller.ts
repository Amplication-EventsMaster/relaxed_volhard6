import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LikesService } from "./likes.service";
import { LikesControllerBase } from "./base/likes.controller.base";

@swagger.ApiTags("likes")
@common.Controller("likes")
export class LikesController extends LikesControllerBase {
  constructor(protected readonly service: LikesService) {
    super(service);
  }
}
