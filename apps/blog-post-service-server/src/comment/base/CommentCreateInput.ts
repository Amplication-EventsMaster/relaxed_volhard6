/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogPostWhereUniqueInput } from "../../blogPost/base/BlogPostWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CommentCreateInput {
  @ApiProperty({
    required: false,
    type: () => BlogPostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlogPostWhereUniqueInput)
  @IsOptional()
  @Field(() => BlogPostWhereUniqueInput, {
    nullable: true,
  })
  blogPost?: BlogPostWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;
}

export { CommentCreateInput as CommentCreateInput };
