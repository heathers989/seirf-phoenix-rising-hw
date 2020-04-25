class MetaController < ApplicationController
    def about
    render json: {a_thought: "Wonder what we use this meta route for?"}
    end
end