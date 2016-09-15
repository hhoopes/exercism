class Robot
  @@name_repository = []
  attr_reader :name

  def initialize
    @name = generate_name
  end

  def reset
    generate_name
  end

  private

  def generate_name
    new_name = ""
    2.times do
      new_name << ("A".."Z").to_a.sample
    end

    3.times do
      new_name << ("0".."9").to_a.sample
    end

    unique_name?(new_name) ? save_name(new_name) : generate_name
  end

  def save_name(name)
    @@name_repository << name
    @name = name
  end

  def unique_name?(name)
    !@@name_repository.include?(name)
  end
end
