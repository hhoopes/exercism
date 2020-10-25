def calculateCollatz(initial, step = 0)
even = ->(num) { num % 2 === 0 }
odd = ->(num) { num % 2 === 1 }
    case(initial)
    when 1
        step
    when even 
        calculateCollatz(initial/2, step + 1)
    when odd 
        calculateCollatz(initial * 3 + 1, step + 1)
    end
end


puts calculateCollatz(12)
puts calculateCollatz(1)
