import { sqliteTable,text,integer,index } from 'drizzle-orm/sqlite-core';
export const runs=sqliteTable('race_runs',{
 id:text('id').primaryKey(),name:text('name').notNull(),mode:text('mode').notNull(),track:text('track').notNull(),seed:integer('seed').notNull(),distance:integer('distance').notNull(),timeMs:integer('time_ms').notNull(),score:integer('score').notNull(),createdAt:integer('created_at').notNull()
},t=>[index('race_rank_idx').on(t.mode,t.track,t.timeMs),index('race_created_idx').on(t.createdAt)]);
export const rooms=sqliteTable('race_rooms',{
 code:text('code').primaryKey(),hostId:text('host_id').notNull(),track:text('track').notNull(),status:text('status').notNull(),startAt:integer('start_at').notNull().default(0),createdAt:integer('created_at').notNull(),touchedAt:integer('touched_at').notNull()
},t=>[index('room_touched_idx').on(t.touchedAt)]);
export const members=sqliteTable('race_members',{
 id:text('id').primaryKey(),room:text('room').notNull(),name:text('name').notNull(),ready:integer('ready').notNull().default(0),snapshot:text('snapshot').notNull().default('{}'),updatedAt:integer('updated_at').notNull()
},t=>[index('room_member_idx').on(t.room,t.updatedAt)]);
