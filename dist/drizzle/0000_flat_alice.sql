CREATE TABLE `race_runs` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`mode` text NOT NULL,
	`track` text NOT NULL,
	`seed` integer NOT NULL,
	`distance` integer NOT NULL,
	`time_ms` integer NOT NULL,
	`score` integer NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `race_rank_idx` ON `race_runs` (`mode`,`track`,`time_ms`);--> statement-breakpoint
CREATE INDEX `race_created_idx` ON `race_runs` (`created_at`);