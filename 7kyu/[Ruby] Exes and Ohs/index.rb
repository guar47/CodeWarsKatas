def XO(str)
  os = 0
  xes = 0
  
  str.downcase.chars.each do |ch|
    if ch === 'x' 
      xes += 1
    end
    if ch === 'o'
      os += 1
    end
  end
  os === xes
end