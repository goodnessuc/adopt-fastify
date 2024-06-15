# Makefile for a Fastify project

# Define the default goal
.DEFAULT_GOAL := help

# Define variables
NODE_ENV := development

# Define commands
install: ## Install project dependencies
	npm install

start: ## Start the Fastify server
	NODE_ENV=$(NODE_ENV) npm start

dev: ## Start the Fastify server in development mode
	NODE_ENV=$(NODE_ENV) npm run dev

build: ## Build the Fastify project
	npm run build

test: ## Run tests
	npm test

lint: ## Lint the code
	npm run lint

clean: ## Clean the build files
	rm -rf dist

help: ## Display this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

.PHONY: install start dev build test lint clean help

push:
	@echo "Pushing to GitHub..."
	git add .
	@read -p "Enter commit message: " commit_msg; \
	git commit -m "$$commit_msg"; \
	git push
