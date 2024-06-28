import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SharesService } from "./shares.service";
import { SharesControllerBase } from "./base/shares.controller.base";

@swagger.ApiTags("shares")
@common.Controller("shares")
export class SharesController extends SharesControllerBase {
  constructor(protected readonly service: SharesService) {
    super(service);
  }
}
