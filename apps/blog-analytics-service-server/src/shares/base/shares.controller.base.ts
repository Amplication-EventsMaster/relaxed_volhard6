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
import { SharesService } from "../shares.service";
import { SharesCreateInput } from "./SharesCreateInput";
import { Shares } from "./Shares";
import { SharesFindManyArgs } from "./SharesFindManyArgs";
import { SharesWhereUniqueInput } from "./SharesWhereUniqueInput";
import { SharesUpdateInput } from "./SharesUpdateInput";

export class SharesControllerBase {
  constructor(protected readonly service: SharesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shares })
  async createShares(@common.Body() data: SharesCreateInput): Promise<Shares> {
    return await this.service.createShares({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sharedAt: true,
        userId: true,
        postId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Shares] })
  @ApiNestedQuery(SharesFindManyArgs)
  async sharesItems(@common.Req() request: Request): Promise<Shares[]> {
    const args = plainToClass(SharesFindManyArgs, request.query);
    return this.service.sharesItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sharedAt: true,
        userId: true,
        postId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shares })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shares(
    @common.Param() params: SharesWhereUniqueInput
  ): Promise<Shares | null> {
    const result = await this.service.shares({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sharedAt: true,
        userId: true,
        postId: true,
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
  @swagger.ApiOkResponse({ type: Shares })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShares(
    @common.Param() params: SharesWhereUniqueInput,
    @common.Body() data: SharesUpdateInput
  ): Promise<Shares | null> {
    try {
      return await this.service.updateShares({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sharedAt: true,
          userId: true,
          postId: true,
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
  @swagger.ApiOkResponse({ type: Shares })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShares(
    @common.Param() params: SharesWhereUniqueInput
  ): Promise<Shares | null> {
    try {
      return await this.service.deleteShares({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          sharedAt: true,
          userId: true,
          postId: true,
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
