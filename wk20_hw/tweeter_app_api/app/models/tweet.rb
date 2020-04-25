class Tweet < ApplicationRecord
    validates :content, presence: true
    validates :title, uniqueness: true
end