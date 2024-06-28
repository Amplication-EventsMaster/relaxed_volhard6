/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HelloService } from "../hello.service";
import { HelloCreateInput } from "./HelloCreateInput";
import { Hello } from "./Hello";
import { HelloFindManyArgs } from "./HelloFindManyArgs";
import { HelloWhereUniqueInput } from "./HelloWhereUniqueInput";
import { HelloUpdateInput } from "./HelloUpdateInput";

export class HelloControllerBase {
  constructor(protected readonly service: HelloService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hello })
  async createHello(@common.Body() data: HelloCreateInput): Promise<Hello> {
    return await this.service.createHello({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Hello] })
  @ApiNestedQuery(HelloFindManyArgs)
  async hellos(@common.Req() request: Request): Promise<Hello[]> {
    const args = plainToClass(HelloFindManyArgs, request.query);
    return this.service.hellos({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hello })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hello(
    @common.Param() params: HelloWhereUniqueInput
  ): Promise<Hello | null> {
    const result = await this.service.hello({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hello })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHello(
    @common.Param() params: HelloWhereUniqueInput,
    @common.Body() data: HelloUpdateInput
  ): Promise<Hello | null> {
    try {
      return await this.service.updateHello({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hello })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHello(
    @common.Param() params: HelloWhereUniqueInput
  ): Promise<Hello | null> {
    try {
      return await this.service.deleteHello({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}