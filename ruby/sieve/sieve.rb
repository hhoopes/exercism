class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    potential_primes = (2..@limit).to_a
    iterations = @limit/2

    (2..iterations).to_a.each do | factor |
      next if !potential_primes.include? factor

      max = @limit/factor + 1
      (2..max).to_a.each do | i |
        potential_primes.delete(factor * i)
      end
    end

    potential_primes
  end
end
