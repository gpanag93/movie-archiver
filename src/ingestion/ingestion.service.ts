import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InputStatus } from '@prisma/client';
import { determineInputSource } from './resolver/input.resolver';

@Injectable()
export class IngestionService {
    constructor(private prisma: PrismaService) { }

    async ingestMovie(text: string) {
        const source = determineInputSource(text);

        return this.prisma.movieInput.create({
            data: {
                rawInput: text,
                source: source,
                status: InputStatus.PENDING,
            },
        });
    }
}
