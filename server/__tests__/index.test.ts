import { jobTest, jobsTest } from './jobs';
import insertDB from '../src/db/config/build';
import sequelize from '../src/db/config/connection';
import proposalsTests from './proposals';

beforeAll(() => insertDB());
afterAll(() => sequelize.close());

describe('Jobs API', jobsTest);
describe('Job API', jobTest);
describe('POST /proposals - /api/v1/proposals Testing all Proposal inputs values', proposalsTests);