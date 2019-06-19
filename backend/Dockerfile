FROM ruby:2.5-slim

WORKDIR /backend
COPY . .
RUN bundle install
CMD ["ruby", "server.rb"]
EXPOSE 50051
