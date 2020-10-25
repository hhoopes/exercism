class CollatzConjecture
    def self.steps(num)
        raise ArgumentError if num < 1

        steps = 0
        while num > 1
            num = num % 2 === 0 ? num / 2 : num * 3 + 1
            steps += 1
        end
        steps
    end
end