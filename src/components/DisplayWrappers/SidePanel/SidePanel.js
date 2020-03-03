import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as PRFlag } from "assets/SidePanel/PRFlag.svg";
import Logo from "components/Primitive/SidePanel/Logo";
import Info from "components/Primitive/SidePanel/Info";
import CreateSubjectButton from "components/Primitive/SidePanel/SidePanelActionButton";

import { sidePanelText as displayText } from "./SidePanelText";
import { useLanguage } from "CustomHooks/useLanguage";

const SidePanel = ({ type, secondary, props }) => {
  switch (type) {
    case "Standard":
      return <SidePanelStandard {...props} />;
    case "CauseOnly":
      return <SidePanelCauseOnly {...props} />;
    case "PostOnly":
      return <SidePanelPostOnly {...props} />;
    case "CauseInfo":
      return <SidePanelCauseInfo {...props} />;
    case "PostInfo":
      return <SidePanelPostInfo {...props} />;
    case "Detail":
      return <SidePanelDetail secondary={secondary} {...props} />;
    default:
      return <SidePanelStandard {...props} />;
  }
};

const sidePanelStyle = css`
  /* border: 1px solid black; */
  width: 300px;
  height: auto;
  background-color: #fff;

  padding-bottom: 20px;
  margin-top: 100px;
  position: sticky;
  top: 172px;

  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const EnglishStandard =
  "Voz de Puerto Rico (Voz de PR) is a social platform that allows users to take an active role in the progression of human needs, social betterment and national development of Puerto Rico. It is community based, and provides a voice to those who wish to enact change across society.";
const SpanishStandard =
  "Voz de Puerto Rico es una plataforma social que permite a los usuarios tomar acción en la progresión de las necesidades humanas, el mejoramiento social y el desarrollo de Puerto Rico.  Está basado en la comunidad y facilita el acceso a la voz de aquellos que desean implementar un cambio en toda la sociedad.";
const StandardWrapper = props => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {language === "spanish"
          ? displayText.sp.standard
          : displayText.en.standard}
      </Info>
      <CreateSubjectButton />
      <CreateSubjectButton secondary />
    </div>
  );
};

const SidePanelStandard = styled(StandardWrapper)`
  ${sidePanelStyle}
`;

const EnglishCauseOnly =
  "A Cause in Voz de PR is a request for assistance. It should be used to bring attention to a situation that requires help. Help can be in the form of volunteer work, a donation, or any other type of assistance that would help the Cause to achieve its goal! If you would like to make a donation, please make a note of the Cause ID and donate via ATH MOVIL.";
const SpanishCauseOnly =
  "Una causa en Voz de PR es una solicitud de asistencia.  Se utiliza únicamente para crear atención a situaciones donde ayuda es necesaria.  La ayuda puede ser trabajo voluntario, una donación, o cualquier tipo de asistencia que ayude a la causa lograr su meta.  Si deseas donar dinero, grabe el ID de la causa y realice su donación a través de ATH Móvil.";

const CauseOnlyWrapper = props => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {language === "spanish"
          ? displayText.sp.causeOnly
          : displayText.en.causeOnly}
      </Info>
      <CreateSubjectButton />
    </div>
  );
};

const SidePanelCauseOnly = styled(CauseOnlyWrapper)`
  ${sidePanelStyle}
`;

const EnglishPostOnly =
  "A Post in Voz de PR is curated information that will be useful to the people of Puerto Rico. A  Post aims to inform using knowledge, facts, figures, news articles, or general information that may benefit other users. It can be used as the starting point for a conversation relevant to Puerto Rico!";
const SpanishPostOnly =
  "Una publicación en Voz de PR es información o contenido creativo dirigido a la población puertorriqueña.  El objetivo de la publicación es informar sobre conocimientos, hechos, cifras, artículos de noticias, información general, o entretenimiento, que pueda beneficiar a otros usuarios.  ¡Se puede utilizar como punto de partida para una conversación relevante para Puerto Rico!";

const PostOnlyWrapper = props => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {language === "spanish"
          ? displayText.sp.postOnly
          : displayText.en.postOnly}
      </Info>
      <CreateSubjectButton secondary />
    </div>
  );
};

const SidePanelPostOnly = styled(PostOnlyWrapper)`
  ${sidePanelStyle}
`;
const CauseInfoWrapper = props => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {language === "spanish"
          ? displayText.sp.causeInfo
          : displayText.en.causeInfo}
      </Info>
    </div>
  );
};

const SidePanelCauseInfo = styled(CauseInfoWrapper)`
  ${sidePanelStyle}
`;

const PostInfoWrapper = props => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {language === "spanish"
          ? displayText.sp.postInfo
          : displayText.en.postInfo}
      </Info>
    </div>
  );
};

const SidePanelPostInfo = styled(PostInfoWrapper)`
  ${sidePanelStyle}
`;

const SidePanelDetailWrapper = ({ secondary, ...props }) => {
  const { language } = useLanguage();

  return (
    <div {...props}>
      <PRFlag />
      <Logo />
      <Info>
        {secondary
          ? language === "spanish"
            ? displayText.sp.detailPost
            : displayText.en.detailPost
          : language === "spanish"
          ? displayText.sp.detailPost
          : displayText.en.detailPost}
      </Info>
      <CreateSubjectButton secondary={secondary} />
    </div>
  );
};

const SidePanelDetail = styled(SidePanelDetailWrapper)`
  ${sidePanelStyle}
  margin-top: 0px;
  position: sticky;
  top: 95px;
`;

export default SidePanel;
