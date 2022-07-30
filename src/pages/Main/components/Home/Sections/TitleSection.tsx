type Props = {
    children: string
}

export default function TitleSection({children}: Props) {
    const upperText = (text: string) => {
        const splittedText = text.split(' ');
        for (let index in splittedText){
            const word = splittedText[index];
            const upperWord = word[0].toUpperCase() + splittedText[index].substring(1);
            splittedText[index] = upperWord;
        }

        return splittedText.join(' ');
    }

    children = upperText(children);

  return (
    <h1>
        {children}
    </h1>
  )
}
