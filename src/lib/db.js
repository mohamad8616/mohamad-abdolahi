import { items } from "../utility/data";

import sql from "better-sqlite3";

const db = sql("portfolio.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT UNIQUE,
    password TEXT
  );
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
  id TEXT NOT NULL PRIMARY KEY,
  expires_at INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
)`);

db.exec(`CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY,
  title TEXT,
  img TEXT,
  desc TEXT,
  link TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  technologies TEXT,
  github TEXT,
  createdAt INTEGER
)`);

export const insertSmst = db.prepare(`
    INSERT INTO projects (id, title, img, desc, link, created_at, technologies, github)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

// Function to insert projects
const insertProjects = () => {
  items.forEach((item) => {
    try {
      insertSmst.run(
        item.id,
        item.title,
        item.img,
        item.desc,
        item.link,
        item.createdAt,
        item.technologies,
        item.github,
      );
      console.log(`Project ${item.id} inserted successfully`);
    } catch (error) {
      console.error(`Error inserting project ${item.id}:`, error);
    }
  });
};

// Call the function to insert projects
insertProjects();

// Function to get all projects
export function getAllProjects() {
  const stmt = db.prepare(
    `
    SELECT 
      id,
      title,
      img,
      desc,
      link,
      created_at,
      technologies,
      github
    FROM projects
    ORDER BY created_at DESC
  `,
  );
  const projects = stmt.all();

  // Convert technologies string back to array
  return projects.map((project) => ({
    ...project,
    technologies: project.technologies ? project.technologies.split(", ") : [],
    createdAt: new Date(project.created_at),
  }));
}

export default db;
