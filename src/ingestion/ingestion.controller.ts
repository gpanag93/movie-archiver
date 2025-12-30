import { Body, Controller, Post } from '@nestjs/common';
import { IngestionService } from './ingestion.service';

@Controller('ingestion')
export class IngestionController {
    constructor(private readonly ingestionService: IngestionService) { }

    @Post('movie')
    async ingestMovie(@Body('text') text: string) {
        return this.ingestionService.ingestMovie(text);
    }
}
