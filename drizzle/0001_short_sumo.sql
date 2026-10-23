CREATE TABLE `race_members` (
	`id` text PRIMARY KEY NOT NULL,
	`room` text NOT NULL,
	`name` text NOT NULL,
	`ready` integer DEFAULT 0 NOT NULL,
	`snapshot` text DEFAULT '{}' NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `room_member_idx` ON `race_members` (`room`,`updated_at`);--> statement-breakpoint
CREATE TABLE `race_rooms` (
	`code` text PRIMARY KEY NOT NULL,
	`host_id` text NOT NULL,
	`track` text NOT NULL,
	`status` text NOT NULL,
	`start_at` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL,
	`touched_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `room_touched_idx` ON `race_rooms` (`touched_at`);