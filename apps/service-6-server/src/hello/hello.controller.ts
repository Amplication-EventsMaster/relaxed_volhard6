import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HelloService } from "./hello.service";
import { HelloControllerBase } from "./base/hello.controller.base";

@swagger.ApiTags("hellos")
@common.Controller("hellos")
export class HelloController extends HelloControllerBase {
  constructor(protected readonly service: HelloService) {
    super(service);
  }
}
