# set up player class

class Player
    def initialize
        @name = "name"
        @bankroll = 1
        @hand = []
    end
    def name
        @name
    end
    def bankroll
        @bankroll
    end
    def hand
        @hand
    end
    def name=value
        @name = value
    end
    def bankroll=value
        @bankroll = value
    end
    def hand=value
        @hand
    end
end
#create array for deck
deck = []

#create class for card? May not be necessary.
class Card
    def initialize
        @value = 2
    end
    def card_value
        @value
    end
    def card_value=card_value
        @value = card_value
    end
end

#create an array for the number of cards in each suit 2-10 numbered, three additional 10s for the face cards, and 11 for ace
cards_in_suit = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

#push the cards into the deck array as hashes
# def hearts_cards
# @cards_in_suit.each do |card|
#     @deck << {card_val: card, suit: 'hearts'}
# end

# end

# def diamonds_cards
#     @cards_in_suit.each do |card|
#         @deck << {card_val: card, suit: 'diamonds'}
#     end
#     end

# def spades_cards
# @cards_in_suit.each do |card|
#     @deck << {card_val: card, suit: 'spades'}
# end
# end

# def clubs_cards
#     @cards_in_suit.each do |card|
#         @deck << {card_val: card, suit: 'clubs'}
#     end
#     end

# hearts_cards()
# diamonds_cards()
# spades_cards()
# clubs_cards()

# p @deck.length

i = 1
for i in 1..4
    i+=1
cards_in_suit.each do |card|
    deck << {card_val: card}
end
end 

# p deck.length
# to call a value in the deck array: deck[0][:card_val]

# faces = deck.select {|i| i == 10}
# p faces

#set up player and computer objects
human_player = Player.new
puts "What is your name?"
human_player.name = $stdin.gets.chomp
human_player.bankroll = 100
p "Welcome to blackjack, #{human_player.name}!"

the_house = Player.new
the_house.name = "Computer"
the_house.bankroll = 10000
p "Your opponent is #{the_house.name}."


round = 0
play = true
while play == true do
    round +=1

if round > 13
    puts "no more cards available!"
    play = false
end

if human_player.bankroll <= 0
    puts "You're out of money. Go home and rethink your life choices."
    play = false
end

puts "Press any key to shuffle the deck..."
$stdin.gets
deck.shuffle!
puts "Deck shuffled!"


cards_drawn_human = deck.sample(2)
deck.delete_at deck.index cards_drawn_human[0]
deck.delete_at deck.index cards_drawn_human[1]

cards_drawn_computer = deck.sample(2)
deck.delete_at deck.index cards_drawn_computer[0]
deck.delete_at deck.index cards_drawn_computer[1]

# p deck.length

human_player.hand.push(cards_drawn_human[0][:card_val], cards_drawn_human[1][:card_val])

the_house.hand.push(cards_drawn_computer[0][:card_val], cards_drawn_computer[1][:card_val])


human_hand_sum = human_player.hand[0] + human_player.hand[1]
computer_hand_sum = the_house.hand[0] + the_house.hand[1]

puts "Your cards are #{human_player.hand[0]} and #{human_player.hand[1]} for a total score of #{human_hand_sum}." 
puts "How much would you like to bet? The default bet is 10, and your bankroll is currently at #{human_player.bankroll}."
player_bet = $stdin.gets.to_i
puts "Computer cards are #{the_house.hand[0]} and #{the_house.hand[1]} for a total score of #{computer_hand_sum}."

if human_hand_sum == computer_hand_sum
    puts "It is a tie! No bankrolls were affected."
elsif human_hand_sum > computer_hand_sum || computer_hand_sum > 21
    the_house.bankroll -= player_bet
    human_player.bankroll += player_bet
    puts "Congratulations #{human_player.name}, you win! Your bankroll is now #{human_player.bankroll}."
elsif computer_hand_sum > human_hand_sum || human_hand_sum > 21
    the_house.bankroll += player_bet
    human_player.bankroll -= player_bet
    puts "Sorry, you lose. Your bankroll is now #{human_player.bankroll}."
end
puts "Game over."
puts "do you want to play another hand? type 'd' for deal and 'q' for quit."
play_again = $stdin.gets.chomp
if play_again == 'd'
    play = true
    human_player.hand.clear
    the_house.hand.clear
    elsif 
        play_again == 'q'
        play = false
        p "thanks for playing!"
    end

end



