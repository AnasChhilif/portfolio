FROM oven/bun:1

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

RUN bun add -g serve

COPY . .

RUN bun run build

EXPOSE 4173

CMD [ "bun", "run", "preview", "--host" ]
