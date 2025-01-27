import { Body, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { BaseService } from "../service/BaseService";

export abstract class BaseController<T> {
  constructor(protected readonly service: BaseService<T>) { }

  @Get()
  async findAll(@Query() query: any): Promise<T[]> {
    return this.service.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() dto: any): Promise<T> {
    return this.service.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: any
  ): Promise<T> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
