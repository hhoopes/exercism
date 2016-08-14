class Sieve
  def initialize(limit)
    @range = (2..limit).to_a
    @iter = limit/2
    @limit = limit
  end

  def primes
    primes = @range
    (2..@iter).to_a.each do | multiple |
      @iter.times do | i |
        primes.delete(multiple * (2 + i))
      end
    end
    primes
  end
end
