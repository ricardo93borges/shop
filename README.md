# Shop

## Dependencies

- Docker

## How to run

Before continuing, make sure the shop-api is running.

1. Rename `.env.sample` to `.env`
2. Run `docker build -t shop/shop .` to build the image
3. Run `docker run -p 3001:3001 shop/shop` to run the container
4. Access the application on `http://localhost:3001`
