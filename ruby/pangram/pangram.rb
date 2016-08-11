class Pangram
  def self.is_pangram?(str)
    ("a".."z").all? do | letter |
      str.downcase.include? letter
    end
  end
end
