import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from "./board.entity";
import { BoardStatus } from './board.status-enum';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>
    ) {}

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description } = createBoardDto;
        const board = this.boardRepository.create({ 
            title, 
            description, 
            status: BoardStatus.PUBLIC 
        });
        await this.boardRepository.save(board);
        return board;
    }

    async findOne(id: number): Promise<Board | null> {
        return this.boardRepository.findOne({ where: { id } });
    }

    async delete(id: number) {
        return this.boardRepository.delete(id);
    }

    async save(board: Board): Promise<Board> {
        return this.boardRepository.save(board);
    }

    async find(): Promise<Board[]> {
        return this.boardRepository.find();
    }
}