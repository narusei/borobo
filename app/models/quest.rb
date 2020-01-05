class Quest < ApplicationRecord
    belongs_to :user
    validates_presence_of :title, :stance, :category, :detail, :start_date
end
