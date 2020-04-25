class TweetsController < ApplicationController
    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def show
        puts params
        tweet = Tweet.find(params[:id])
        render json: {status: 200, tweet: tweet}
    end

    def tweet_params
        params.required(:tweet).permit(:title, :content, :author)
    end
   
end