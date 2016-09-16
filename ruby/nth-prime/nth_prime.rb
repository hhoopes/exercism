class Prime
  @@encountered_primes = {}

  def self.nth(num)
    @@encountered_primes[num] || calculate_nth(num)
  end

  private

  def self.calculate_nth(iteration)
    index = 0
    prime_count = 0
    loop do
      index += 1
      if is_prime?(index)
        @@encountered_primes[prime_count] = index
        if prime_count == iteration
          return index
        else
          prime_count += 1
        end
      end
    end
  end

  def self.is_prime?(num)
    (2..num/2).to_a.none? do | factor |
      num % factor == 0
    end
  end
end
