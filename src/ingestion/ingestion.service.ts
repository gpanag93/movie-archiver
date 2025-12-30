import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InputSource, InputStatus } from '@prisma/client';

@Injectable()
export class IngestionService {
    constructor(private prisma: PrismaService) { }

    async ingestMovie(text: string) {
        // Determine source
        // Simple logic: if it starts with http/https and contains imdb.com, it's IMDB
        const isImdb = text.startsWith('http') && text.includes('imdb.com');
        const source = isImdb ? InputSource.IMDB : InputSource.TEXT;

        return this.prisma.movieInput.create({
            data: {
                rawInput: text,
                source: source,
                status: InputStatus.PENDING,
            },
        });
    }
}
