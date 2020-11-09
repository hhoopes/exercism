class Acronym
  def self.abbreviate(phrase)
    phrase.scan(/\b[a-zA-Z]/).reduce(:+).upcase
  end
end