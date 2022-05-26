FROM denoland/deno:1.20.6

RUN apt-get update
RUN apt-get install -y jq moreutils

WORKDIR /
COPY . .

RUN deno task vendor
RUN jq '.importMap = "./vendorMap.json"' deno.json|sponge deno.json

EXPOSE 8000
CMD ["deno", "task", "start"]
